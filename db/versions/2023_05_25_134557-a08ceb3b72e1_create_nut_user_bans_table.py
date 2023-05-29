"""create nut.user-bans table

Revision ID: a08ceb3b72e1
Revises: 2729e9930cb6
Create Date: 2023-05-25 13:45:57.409739

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a08ceb3b72e1'
down_revision = '2729e9930cb6'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'user_bans',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('ip', sa.String(length=45), nullable=False),
        sa.Column('reason', sa.String(length=255), nullable=False),
        sa.Column('expired_at', sa.DateTime, nullable=False),
        sa.Column('creator_id', sa.Integer, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_user_bans_ip', 'user_bans', ['ip'])


def downgrade() -> None:
    op.drop_table('user_bans')
