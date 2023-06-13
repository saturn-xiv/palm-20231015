"""create nut.user-sessions table

Revision ID: 38b92179a574
Revises: a08ceb3b72e1
Create Date: 2023-05-25 13:54:04.323659

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '38b92179a574'
down_revision = 'a08ceb3b72e1'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'user_sessions',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('uid', sa.String(length=36), nullable=False, unique=True),
        sa.Column('provider_type', sa.String(
            length=31), nullable=False, unique=True),
        sa.Column('ip', sa.String(length=45), nullable=False),
        sa.Column('expired_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_user_sessions_ip', 'user_sessions', ['ip'])
    op.create_index('idx_user_sessions_provider_type',
                    'user_sessions', ['provider_type'])


def downgrade() -> None:
    op.drop_table('user_sessions')
