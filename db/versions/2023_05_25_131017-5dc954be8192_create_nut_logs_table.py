"""create nut.logs table

Revision ID: 5dc954be8192
Revises: cb2bc6e633a1
Create Date: 2023-05-25 13:10:17.588789

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5dc954be8192'
down_revision = 'cb2bc6e633a1'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'logs',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('level', sa.Integer, nullable=False, server_default='0'),
        sa.Column('ip', sa.String(length=45), nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('resource_id', sa.Integer),
        sa.Column('message', sa.Text, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_logs_resource_type', 'logs', ['resource_type'])
    op.create_index('idx_logs_ip', 'logs', ['ip'])


def downgrade() -> None:
    op.drop_table('logs')
